import { FC } from "react";
import styled from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styled.accFooter}>
      <a target="_blank" href="https://coofis.com/"> Developed By Coofis &#169;</a>
    </footer>
  );
};

export default Footer;
