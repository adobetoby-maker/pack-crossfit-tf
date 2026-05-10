import * as fs from "fs"
import * as path from "path"
import * as https from "https"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PHOTO_ID_REGEX = /photo-[a-zA-Z0-9_-]{10,}/g

function findPhotoIds(dir: string): string[] {
  const ids = new Set<string>()
  const walk = (current: string) => {
    const entries = fs.readdirSync(current, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory() && entry.name !== "node_modules") {
        walk(full)
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))
      ) {
        const content = fs.readFileSync(full, "utf-8")
        const matches = content.match(PHOTO_ID_REGEX) ?? []
        matches.forEach((m) => ids.add(m))
      }
    }
  }
  walk(dir)
  return Array.from(ids)
}

function checkUrl(photoId: string): Promise<boolean> {
  return new Promise((resolve) => {
    const url = `https://images.unsplash.com/${photoId}?w=10`
    const req = https.request(url, { method: "HEAD" }, (res) => {
      resolve((res.statusCode ?? 500) < 400)
    })
    req.on("error", () => resolve(false))
    req.end()
  })
}

async function main() {
  const srcDir = path.join(__dirname, "../src")
  const ids = findPhotoIds(srcDir)
  console.log(`Checking ${ids.length} Unsplash photo ID(s)...\n`)

  let failed = 0
  for (const id of ids) {
    const ok = await checkUrl(id)
    if (ok) {
      console.log(`  ✓  ${id}`)
    } else {
      console.error(`  ✗  BROKEN: ${id}`)
      failed++
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} broken image(s). Replace before committing.\n`)
    process.exit(1)
  }
  console.log("\nAll images OK.\n")
}

main()
