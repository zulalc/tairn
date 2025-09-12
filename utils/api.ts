export interface Book {
  id: string;
  title: string;
  authors: string[];
  cover: string;
}

export async function searchBooks(query: string): Promise<Book[]> {
  if (!query.trim()) return [];

  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();

  return (
    data.docs?.map((doc: any) => ({
      id: doc.key,
      title: doc.title,
      authors: doc.author_name || [],
      cover: doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : "",
    })) ?? []
  );
}
