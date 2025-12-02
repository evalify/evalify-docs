import React from 'react';
import clsx from 'clsx';
import { Github, Linkedin } from 'lucide-react';
import styles from './styles.module.css';

interface ContributorCardProps {
    name: string;
    role: string;
    about: string;
    imgUrl: string;
    linkedinUrl?: string;
    githubUrl?: string;
}

export default function ContributorCard({
    name,
    role,
    about,
    imgUrl,
    linkedinUrl,
    githubUrl,
}: ContributorCardProps): React.ReactElement {
    return (
        <div className={clsx('card', styles.card)}>
            <div className={styles.cardHeader}>
                <div className={styles.avatarContainer}>
                    <img src={imgUrl} alt={name} className={styles.avatar} />
                </div>
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.about}>{about}</p>
            </div>
            <div className={styles.cardFooter}>
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                        <Github size={20} />
                    </a>
                )}
                {linkedinUrl && (
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                )}
            </div>
        </div>
    );
}
