import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 672px)'
  })
  return (
    <>
      {isDesktopOrLaptop ?
        <PCImage />
        :
        <SmartPhoneImage />
      }
    </>
  );
}

export default Hero;

const PCImage = () => (<img style={{
  height: '606px', objectFit: "cover",
}}
      src="/assets/mainvisual.jpg"
      alt="main-visual-md"
      height={606}
      width={1920} />)

const SmartPhoneImage = () => (
  <img style={{
    height: '92vh', objectFit: "cover", objectPosition: '50% 50%'
  }}
      src="/assets/mainvisual.jpg"
      alt="main-visual-sm" />
)
