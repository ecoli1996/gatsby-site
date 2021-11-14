import React, { Fragment } from "react"
import Avatar from "../components/avatar"
import { Themed, css, Flex } from "theme-ui"

function Bio() {
  return (
    <div>
    <Flex css={css({ marginLeft: `50%`, fontSize: `xxx-large`, fontWeight: `bold`, color: `heading`})}>
    <Fragment>
        Hello!
    </Fragment>
    </Flex>
    <Flex css={css({ mb: 4, alignItems: `center`, fontSize: `large` })}>
        <Avatar title="Elaina's Avatar" altText="Elaina at Matanuska Glacier smiling with a helmet on."/>
        <Themed.div>
            <Fragment>
                My name is Elaina. I grew up in New Orleans, studied Computer Science at the College of Charleston, and I'm currently working as a software engineer. This blog is meant to shine ar-ray of light on my hobbies and passions from running to code to travel to film. Take a look at the links at the top of my page to take a deeper look. Thanks for taking the time to read my blog!
            </Fragment>
        </Themed.div>
    </Flex>
    </div>);
}
export default Bio;