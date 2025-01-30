'use client'
import React, {useMemo} from 'react';
import styles from './styles.module.css'
import {Game} from "@/interfaces";

interface TypeProps {
    data: Game['type']
}

export function Type({data}: TypeProps) {
    const className = useMemo(() => data ? styles[data.toLowerCase()] : '', [data])
    return (
        <div className={`${styles.type} ${className}`}>
            {data}
        </div>
    );
};
