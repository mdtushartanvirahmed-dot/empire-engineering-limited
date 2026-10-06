"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  Search,
  X,
} from "lucide-react"

import { searchData } from "../lib/search-data"

export function SiteSearch() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const value = query.trim().toLowerCase()

    if (!value) {
      return []
    }

    return searchData.filter((item) => {
      const searchable = [
        item.title,
        item.description,
        item.category,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase()

      return searchable.includes(value)
    })
  }, [query])

  return (
    <div className="site-search">
      <div className="search-box">
        <Search size={21} />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="সিভিল ইঞ্জিনিয়ারিং বিষয়ে খুঁজুন..."
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="সার্চ মুছুন"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            <>
              <div className="search-result-count">
                {results.length}টি ফলাফল পাওয়া গেছে
              </div>

              {results.map((item) => (
                <a
                  href={item.href}
                  className="search-result"
                  key={item.href}
                >
                  <div>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ArrowRight size={18} />
                </a>
              ))}
            </>
          ) : (
            <div className="search-empty">
              <Search size={30} />

              <h3>কোনো ফলাফল পাওয়া যায়নি</h3>

              <p>
                অন্য কোনো শব্দ দিয়ে আবার চেষ্টা করুন।
              </p>

              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  query + " civil engineering"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="google-search-link"
              >
                Google-এ খুঁজুন
                <ArrowRight size={17} />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}