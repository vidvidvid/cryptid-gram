import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import bg from "./bg.png";
import gumb from "../../gumb.svg";

import shape1 from "./shape1.png";

function Page() {
  const [isShape1Visible, setIsShape1Visible] = useState(false);
  const [isShape2Visible, setIsShape2Visible] = useState(true); //ko programiras si daj true, na koncu popravi na false

  return (
    <Box bgImage={`url(${bg})`} bgSize='cover' h='100vh' position='relative'>
      {/* gumbki */}
      <Image
        right='250px' // kolko je oddaljen od desne
        top='350px' // kolko je oddaljen od vrha
        alt='gumb1' // samo za tvojo referenco, lahko spremenis v karkoli
        src={gumb} // ne rabis spreminjat (source slikice)
        position='absolute' // stays same
        borderRadius='full' // ne rabis spreminjat
        height='100px' // ne rabis spreminjat (razen, ce bos hotla manjsi/vecji gumb)
        width='100px' // ne rabis spreminjat
        onMouseEnter={() => setIsShape1Visible(true)} // ne rabis spreminjat
        onMouseLeave={() => setIsShape1Visible(false)} // ne rabis spreminjat
      />
      <Image
        right='454px' // kolko je oddaljen od desne
        top='817px' // kolko je oddaljen od vrha
        alt='gumb1' // samo za tvojo referenco, lahko spremenis v karkoli
        src={gumb} // ne rabis spreminjat (source slikice)
        position='absolute' // stays same
        borderRadius='full' // ne rabis spreminjat
        height='100px' // ne rabis spreminjat (razen, ce bos hotla manjsi/vecji gumb)
        width='100px' // ne rabis spreminjat
        onMouseEnter={() => setIsShape2Visible(true)} // moras prilagodit stevilko
        onMouseLeave={() => setIsShape2Visible(false)} // ne rabis spreminjat
      />

      {/* shapes */}
      {isShape1Visible && ( // ce je shape 1 visible, se prikaze slika
        <Image
          height='20%' // doloca velikost glede na visino, sirina se prilagodi
          alt='shape1' // samo za tvojo referenco, lahko spremenis v karkoli
          src={shape1} // ne rabis spreminjat (source slikice)
          position='absolute' // stays same
          right='300px' // kolko je oddaljen od desne
          top='120px' // kolko je oddaljen od vrha
        />
      )}
      {isShape2Visible && ( // ce je shape 1 visible, se prikaze slika
        <Image
          height='20%' // doloca velikost glede na visino, sirina se prilagodi
          alt='shape1' // samo za tvojo referenco, lahko spremenis v karkoli
          src={shape1} // ne rabis spreminjat (source slikice)
          position='absolute' // stays same
          right='400px' // kolko je oddaljen od desne
          top='120px' // kolko je oddaljen od vrha
        />
      )}
    </Box>
  );
}

export default Page;