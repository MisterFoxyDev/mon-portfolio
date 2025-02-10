import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";

const Certificatspage = () => {
  return (
    <div className="mx-4 flex max-w-[90dvw] flex-col items-center justify-start pt-32">
      <h1 className="mb-4 text-center font-serif text-2xl tracking-wider sm:text-3xl">
        {<BsAlignEnd className="inline-block text-sm sm:text-xl" />} Mes
        diplômes et certificats{" "}
        {<GiDiploma className="inline-block text-2xl" />}{" "}
        {<BsAlignStart className="inline-block text-sm sm:text-xl" />}
      </h1>
      <section className="mx-4 mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Mon titre professionnel</h2>
        <Image
          src="/certificats/titre_pro_developpeur_informatique_1.webp"
          alt="Titre professionnel développeur informatique"
          width={800}
          height={500}
          priority
        />
      </section>
      <section className="mb-6 flex w-[90dvw] min-w-[300px] flex-col items-center justify-center px-14">
        <h2 className="mb-4 text-2xl font-bold">
          Mes certificats de complétion : Openclassrooms
        </h2>
        <Carousel className="mx-4 w-[90dvw]">
          <CarouselContent>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_creation_site_html5_css3.webp"
                    alt="Certificat de complétion : Créez votre site web avec HTML5 et CSS3"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_gestion_projet_informatique.webp"
                    alt="Certificat de complétion : Gérez votre projet informatique facilement"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_developpeur_agile.webp"
                    alt="Certificat de complétion : Devenez développeur agile"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_projet_digital_cascade.webp"
                    alt="Certificat de complétion : Gérez un projet digital avec une méthodologie en cascade"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_node_express_mongo.webp"
                    alt="Certificat de complétion : Passez au full stack avec Node.js, Express et MongoDB"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_expert_git_github.webp"
                    alt="Certificat de complétion : Devenez un expert de Git et GitHub"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/ocr/certificat_veille.webp"
                    alt="Certificat de complétion : Mettez en place un système de veille informationnelle"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="-translate-x-8 lg:h-12 lg:w-12" />
          <CarouselPrevious className="translate-x-8 lg:h-12 lg:w-12" />
        </Carousel>
      </section>
      <section className="mx-4 mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">
          Mes certificats de complétion : Udemy
        </h2>
        <Carousel className="mx-4">
          <CarouselContent>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/udemy/certificat_javascript_udemy.webp"
                    alt="Certificat de complétion : Javascript"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/udemy/certificat_node_express_mongo_udemy.webp"
                    alt="Certificat de complétion : Node.js, Express et MongoDB"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/udemy/certificat_typescript_udemy.webp"
                    alt="Certificat de complétion : typescript"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/2">
              <Card className="pt-6">
                <CardContent>
                  <Image
                    src="/certificats/udemy/certificat_tests.webp"
                    alt="Certificat de complétion : tests unitaires"
                    width={800}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="-translate-x-8 lg:h-12 lg:w-12" />
          <CarouselPrevious className="translate-x-8 lg:h-12 lg:w-12" />
        </Carousel>
      </section>
    </div>
  );
};

export default Certificatspage;
