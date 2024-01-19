import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skxlUtWddPxsyzblEQmAOhUYaeVe8K1YoCG9y2KbLZl6onQ9UmQwdde5WAKeNHPHLMLLTFj6tuiehGlXhGcvWeL0OlHR1LrQnp7JT8Kb9IQ4ZBsIcMzi4OLQiRVknNjRLxzp4uLBDYk0fzCAmyxTGwfNfCB5pIiVWoq9GxjHlSid5hfudm9H",
})
