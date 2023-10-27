import React from 'react';
import Link from 'next/link';



import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Gideon <br/>
          Full-Stack Web 3 developer and smart contract security researcher.
        </SectionTitle>
        <SectionText>
        I care a lot about human friendly interface design and excellent code quality. Don’t take my word for it, check out my portfolio.
        </SectionText>
        <div style={{display: "flex", flex: "row", justify: "space-between", gap: "5px"}}>
        <Link href="#projects">
        <Button onClick={props.handleClick}>View projects</Button>
        </Link>
        <Link href="#about">
        <Button onClick={props.handleClick}>Full profile</Button>
        </Link>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
