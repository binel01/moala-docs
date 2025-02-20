import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simplicité',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Une seule API pour gérer tous vos moyens de paiement, avec une documentation claire et simple
        pour une intégration rapide
      </>
    ),
  },
  {
    title: 'Fiabilité',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Notre API est conçue pour assurer un traitement stable et efficace des paiements, 
        même en cas de forte demande grâce à une infrastructure robuste et des mécanismes 
        de redondance automatique
      </>
    ),
  },
  {
    title: 'Sécurité',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La protection des données et des transactions est une priorité. 
        Notre API respecte les normes les plus strictes (chiffrement TLS, authentification forte) 
      </>
    ),
  },
  /*{
    title: 'Croissance',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Développez votre activité sans contrainte grâce à une API évolutive qui s'adapte à 
        l’augmentation du volume des transactions et à l’intégration de nouveaux moyens de paiement. 
        Nous facilitons l'expansion vers plusieurs pays africains en offrant une compatibilité avec 
        divers opérateurs locaux.
      </>
    ),
  },
  {
    title: 'Fluidité',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nous garantissons une expérience utilisateur fluide avec un temps de 
        réponse optimisé et une intégration transparente avec vos systèmes. 
        Grâce aux notifications en temps réel et aux webhooks, vous suivez facilement chaque transaction sans latence.
      </>
    ),
  },*/
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
