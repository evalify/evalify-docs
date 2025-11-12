import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Zap, Clock, Shield, LineChart, Users, Brain, Book, Award } from 'lucide-react';

type FeatureItem = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automated Evaluation',
    description: 'Grade assignments and tests with ease',
    icon: Zap,
  },
  {
    title: 'Real-time Feedback',
    description: 'Instant results and detailed analysis',
    icon: Clock,
  },
  {
    title: 'Plagiarism Detection',
    description: 'Ensure academic integrity effortlessly',
    icon: Shield,
  },
  {
    title: 'Performance Analytics',
    description: 'Track progress with detailed insights',
    icon: LineChart,
  },
  {
    title: 'Collaborative Learning',
    description: 'Enable student group discussions',
    icon: Users,
  },
  {
    title: 'AI-Powered Insights',
    description: 'Smart learning recommendations',
    icon: Brain,
  },
  {
    title: 'Course Management',
    description: 'Organize your teaching materials',
    icon: Book,
  },
  {
    title: 'Achievement System',
    description: 'Gamify the learning experience',
    icon: Award,
  },
];

function Feature({title, icon: Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Icon className={styles.featureIcon} width={48} height={48} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
