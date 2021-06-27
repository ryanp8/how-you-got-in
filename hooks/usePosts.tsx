import { useState, useEffect, useContext } from 'react';

import { QueryContext } from "../contexts/useQueryContext";
import { useStore } from "./useStore";
import { PostSchema, PostFetchOptions } from '../types';

export const usePosts = (verified: boolean, page: number): [boolean, PostSchema[]] => {

    const [data, setData] = useState<PostSchema[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { query, setQuery } = useContext(QueryContext);
    const store = useStore();

    const getData = async (reset?: boolean) => {
        setTimeout(async () => {
            console.log("fetching")
            const res = await fetch(`/api/${verified ? 'getVerifiedPosts' : 'getUnverifiedPosts'}?query=${query}&satFilter=${store.satFilter}&actFilter=${store.actFilter}&gpaFilter=${store.gpaFilter}&satScore=${store.satScore}&actScore=${store.actScore}&gpa=${store.gpa}&page=${page}`);
            const json = await res.json();

            let tmp: any[];
            if (reset) tmp = [];
            else tmp = data;
            tmp.push(...json);
            // console.log(tmp  );

            setData(tmp);
            setIsLoading(false);
        }, 100);

    }

    useEffect(() => {
        if (query || store.storeChanged !== 1) {
            setIsLoading(true);
            setData([]);
            getData(true);
        }
    }, [query, store.storeChanged])

    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [page ])

    return [isLoading, data];
}