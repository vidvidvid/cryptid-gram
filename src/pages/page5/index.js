import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import bg from "./bg5.png";
import shape1 from "./shape9.png";
import shape2 from "./shape10.png";

import gumb from "../../gumb.svg";

function Page({ redirectToRandomPage }) {
  const [isShape1Visible, setIsShape1Visible] = useState(false);
  const [isShape2Visible, setIsShape2Visible] = useState(false); //ko programiras si daj true, na koncu popravi na false

  return (
    <Box bgImage={`url(${bg})`} bgSize='cover' h='100vh' position='relative'>
      {/* gumbki */}
      <Image
        right='660px' // kolko je oddaljen od desne
        top='433px' // kolko je oddaljen od vrha
        alt='gumb1' // samo za tvojo referenco, lahko spremenis v karkoli
        src={gumb} // ne rabis spreminjat (source slikice)
        position='absolute' // stays same
        borderRadius='100%' // ne rabis spreminjat
        height='100px' // ne rabis spreminjat (razen, ce bos hotla manjsi/vecji gumb)        onMouseEnter={() => setIsShape1Visible(true)} // ne rabis spreminjat
        onMouseLeave={() => setIsShape1Visible(false)}
        onMouseEnter={() => setIsShape1Visible(true)} // ne rabis spreminjat
        onClick={redirectToRandomPage}
      />
      <Image
        right='710px' // kolko je oddaljen od desne
        top='1403px' // kolko je oddaljen od vrha
        alt='gumb1' // samo za tvojo referenco, lahko spremenis v karkoli
        src={gumb} // ne rabis spreminjat (source slikice)
        position='absolute' // stays same
        borderRadius='100%' // ne rabis spreminjat
        height='100px' // ne rabis spreminjat (razen, ce bos hotla manjsi/vecji gumb)        onMouseEnter={() => setIsShape2Visible(true)} // moras prilagodit stevilko
        onMouseLeave={() => setIsShape2Visible(false)}
        onMouseEnter={() => setIsShape2Visible(true)} // ne rabis spreminjat
        onClick={redirectToRandomPage}
      />

      {/* shapes */}
      {isShape1Visible && ( // ce je shape 1 visible, se prikaze slika
        <Image
          height='20%' // doloca velikost glede na visino, sirina se prilagodi
          alt='shape1' // samo za tvojo referenco, lahko spremenis v karkoli
          src={shape1} // ne rabis spreminjat (source slikice)
          position='absolute' // stays same
          right='500px' // kolko je oddaljen od desne
          top='90px' // kolko je oddaljen od vrha
        />
      )}
      {isShape2Visible && ( // ce je shape 1 visible, se prikaze slika
        <Image
          height='20%' // doloca velikost glede na visino, sirina se prilagodi
          alt='shape2' // samo za tvojo referenco, lahko spremenis v karkoli
          src={shape2} // ne rabis spreminjat (source slikice)
          position='absolute' // stays same
          right='20px' // kolko je oddaljen od desne
          top='1500px' // kolko je oddaljen od vrha
        />
      )}
    </Box>
  );
}

export default Page;
