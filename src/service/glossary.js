export function getGlossary() {
  const data = fetch("http://127.0.0.1:8000/glossary/get/all").then(
    (response) => response.json()
  );
  return data;
}
