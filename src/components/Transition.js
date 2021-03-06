import React from "react"
import posed, { PoseGroup } from "react-pose"

const timeout = 30

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        delay: timeout,
        delayChildren: timeout,
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 30,
      },
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
