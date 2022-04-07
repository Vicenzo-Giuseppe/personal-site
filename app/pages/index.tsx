import { Suspense } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Text, Box, Heading, Button } from "@chakra-ui/react"
import { MotionButton, MotionText } from "../styles/components/motionComponent"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  if (currentUser) {
    return (
      <>
        <Button
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
        <Box>
          <Text>
            {" "}
            User id: <code>{currentUser.id}</code>
          </Text>
          <br />
          <Text>
            {" "}
            User role: <code>{currentUser.role}</code>
          </Text>
        </Box>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <Heading>
            <MotionText>Sign Up</MotionText>
          </Heading>
        </Link>

        <Link href={Routes.LoginPage()}>
          <Heading>
            <MotionText>Login</MotionText>
          </Heading>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <>
      <Box style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </Box>
      <Box style={{ marginTop: "5rem" }}>
        <Heading>
          <a
            href="https://blitzjs.com/docs/getting-started?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MotionText fontFamily="Fira Code" fontWeight="600" fontSize="2rem" color="red">
              {" "}
              Docs{" "}
            </MotionText>
          </a>
        </Heading>
      </Box>
      <MotionButton />
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
