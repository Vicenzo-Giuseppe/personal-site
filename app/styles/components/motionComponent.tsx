import { Button, ButtonProps, Text, TextProps } from "@chakra-ui/react"
import { motion, MotionProps } from "framer-motion"
import { ReactElement } from "react"

type BtnProps = ButtonProps & MotionProps
function MotionButton(props: BtnProps) {
  const MotionBtn = motion<BtnProps>(Button)
  const Animation = {
    initial: {},
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6 },
    },
    exit: {
      y: 0,
    },
    hover: {
      scale: 1.2,
    },
    tap: {
      scale: 0.925,
    },
  }
  return (
    <MotionBtn
      variants={Animation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    ></MotionBtn>
  )
}

type TxtProps = TextProps & MotionProps
function MotionText(props: TxtProps) {
  const MotionTxt = motion<TxtProps>(Text)
  const Animation = {
    initial: {},
    open: {},
    exit: {
      y: 0,
    },
    hover: {
      scale: 1,
    },
    tap: {
      scale: 1,
    },
  }

  return (
    <MotionTxt
      variants={Animation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    ></MotionTxt>
  )
}

export { MotionButton, MotionText }
