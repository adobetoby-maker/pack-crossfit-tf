// JSON-LD structured data component. Content is always our own serialized schema
// objects — never user input. We escape </script> sequences to prevent the one
// known XSS vector specific to script-tag JSON embedding.
function escapeJsonForScript(obj: object): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, "<\\/script>")
}

export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: safe — our own schema objects only, </script> escaped
      dangerouslySetInnerHTML={{ __html: escapeJsonForScript(schema) }}
    />
  )
}
