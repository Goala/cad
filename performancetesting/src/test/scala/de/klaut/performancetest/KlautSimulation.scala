package de.klaut.performancetest

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class KlautSimulation extends Simulation {

  val httpConf = http
    .baseURL("http://35.190.19.48")

  val scn = scenario("GET Media")
    .repeat(10000) {
      exec(http("getMedia")
        .get("/media"))
    }

  setUp(scn.inject(atOnceUsers(100)).protocols(httpConf))
}
