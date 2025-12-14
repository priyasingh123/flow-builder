export function extractAndValidateVariables(str) {
  const regex = /\{\{\s*([^}]+?)\s*\}\}/g;
  const results = [];

  const jsKeywords = new Set([
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "let",
    "enum",
    "await",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public",
    "static",
  ]);

  const isValidIdentifier = (name) => {
    const identifierRegex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    return identifierRegex.test(name) && !jsKeywords.has(name);
  };

  let match;
  while ((match = regex.exec(str)) !== null) {
    const variable = match[1].trim();
    if (isValidIdentifier(variable)) {
      results.push(variable);
    }
  }
  return results;
}
