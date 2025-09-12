"use client";

import { Book, searchBooks } from "@/utils/api";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

function CurrentBookSelector() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const results = await searchBooks(query);
        setBooks(results);
      } catch (error) {
        console.error(error);
      }
    }, 500); // Wait 500ms after typing stops

    return () => clearTimeout(timeout); // Clear previous timeout
  }, [query]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-3">Select Current Book</h2>

      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book..."
          className="border p-2 flex-grow rounded"
        />
        <div className="grid gap-3">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className={`p-3 border rounded cursor-pointer flex items-center gap-3 ${
                selectedBook?.id === book.id ? "border-rose-500" : ""
              }`}
            >
              {book.cover && (
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={48}
                  height={64}
                  className="object-cover rounded"
                />
              )}
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-gray-600">
                  {book.authors.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <div className="mt-4 p-3 border rounded">
          <input type="hidden" name="currentBook" value={selectedBook.id} />
          <h3 className="font-semibold">Selected Book:</h3>
          <p>{selectedBook.title}</p>
          <p className="text-sm text-gray-600">
            {selectedBook.authors.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default CurrentBookSelector;
