import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import SignUpForm from "@/components/ui/forms/auth/SignUpForm";
import { Flex } from "@chakra-ui/react";
import NavbarBrand from "@/components/ui/navigation/NavbarBrand";
import Footer from "@/components/ui/Footer";

export default function SignUpPage() {
  return (
    <>
      <Flex
        as={"main"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        minHeight={"100vh"}
      >
        <NavbarBrand />

        <SignUpForm />
      </Flex>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
      return {
        redirect: {
          destination: "/photos",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
}
