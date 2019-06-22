import React from "react"
import styled from "styled-components"

import "./index.css"

const data = [
  { name: `lannonbr.com`, url: `https://lannonbr.com` },
  { name: `lannonbr.dev`, url: `https://lannonbr.dev` },
  { name: `vscode.rocks`, url: `https://vscode.rocks` },
  {
    name: `gatsby-github-stats`,
    url: `https://gatsby-github-stats.netlify.com`,
  },
  {
    name: `vscode-issue-tracker`,
    url: `https://vscode-issue-tracker.netlify.com`,
  },
  {
    name: `Lannonbr Site Dashboard (This site)`,
    url: `https://lannonbr-site-dashboard.netlify.com`,
  },
]

const SiteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  padding: 0 30px;
`

const SmallCard = styled.div`
  padding: 0.75rem 0.5rem;
  background: white;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: rgb(96, 111, 123);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
  margin-bottom: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(96, 111, 123);
`

const Card = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 1.5rem 1rem;
  background: white;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: rgb(96, 111, 123);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    color: rgb(52, 144, 220);
  }
`

export default () => {
  return (
    <React.Fragment>
      <h1>Lannonbr Site Dashboard</h1>
      <p class="larger">A list of my websites</p>
      <SmallCard>{data.length} Sites</SmallCard>
      <section style={{ width: "100%" }}>
        <SiteList>
          {data.map(({ name, url }) => {
            return (
              <Card href={url}>
                <span>{name}</span>
              </Card>
            )
          })}
        </SiteList>
      </section>
      <p className="center">
        Inspiration by LekoArts's{" "}
        <a href="https://status.lekoarts.de">Status Dashboard</a>
      </p>
    </React.Fragment>
  )
}
