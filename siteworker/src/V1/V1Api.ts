import { Hono } from "hono"
import { fromHono } from "chanfana"
import { Env } from "@Types"

import PortFolioRouters from "./Portfolio/PortFolioRouters"

const app = new Hono<{ Bindings: Env }>()


const V1Api = fromHono(app, {
  docs_url: "/docs",
})

V1Api.route("/PortFolio",PortFolioRouters)

export default V1Api
