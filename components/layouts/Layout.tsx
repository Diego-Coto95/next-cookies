import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface Props extends PropsWithChildren {}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title> Cookie Master </title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
