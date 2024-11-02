import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>TYCOON (testnet v0)</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>MarketPlace</Link>
                </Flex>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
};