import type { Metadata } from "next";
import styles from "./Store.module.scss";

export const metadata: Metadata = {
  title: "Clothings Store | Store",
};

export default function Store() {
  return (
    <section className={styles.store}>
      <div className={styles.store__container}>
        <h1 className={styles.store__title}>
          About Clothings Store{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="100"
            color="#141616"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>
        </h1>
        <p className={styles.store__about}>
          Welcome to Clothings Store - your ultimate destination for all things
          related to fashionable clothing! We are true enthusiasts in the world
          of fashion, where each item reflects the latest fashion trends and
          technologies. Whether you&apos;re in search of comfortable attire for
          everyday wear, stylish pieces for special events, or practical models
          for workouts, we have everything you need. We take pride in offering a
          wide selection of renowned brands, including Nike, Adidas, Puma,
          Reebok, and many more. Our team carefully selects each model to ensure
          you&apos;re provided with only the best products that deliver the
          highest level of comfort, style, and quality. At Clothings Store, we
          don&apos;t just sell clothing - we provide unparalleled service aimed
          at satisfying our customers. Our experts are always ready to help you
          find the perfect piece, taking into account your needs and style
          preferences. We strive to make your shopping experience enjoyable and
          unforgettable. Visit Clothings Store today to discover endless
          possibilities of fashionable clothing and elevate your style to new
          heights!
        </p>
      </div>
    </section>
  );
}
