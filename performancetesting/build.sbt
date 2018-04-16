enablePlugins(GatlingPlugin)

name := "performancetesting"

version := "0.1"

scalaVersion := "2.12.5"

libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % "2.3.1" % "test,it"
libraryDependencies += "io.gatling" % "gatling-test-framework" % "2.3.1" % "test,it"