# VitaeGraph generated graph model

Canonical Markdown records generate three deterministic artifacts under `.generated/`:

- `graph.json` contains sorted record nodes and `CONTAINS` or `RELATED_TO` edges.
- `search-index.json` contains sorted documents and lexical term frequencies.
- `diagnostics.json` contains validation counts, errors, and warnings.

Record IDs form node identities. `parent` creates a `CONTAINS` edge from parent to child. `related_records` creates `RELATED_TO` edges across subtrees. Repeated indexing of unchanged Markdown produces byte-identical JSON.

If indexing finds validation errors, it removes stale `graph.json` and `search-index.json`, writes the failed result to `diagnostics.json`, and exits with an error. This prevents consumers from mistaking an older successful index for the current graph state.

The lexical index is a transparent local retrieval aid, not a relevance or retrieval-quality guarantee. Generated files are caches and must not be edited as source.
