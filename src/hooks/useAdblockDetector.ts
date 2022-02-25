import { useEffect, useState } from "react";

/**
 * A react hook to detect adblockers.
 * @returns [isAdblockCheckComplete, isAdblockEnabled]
 */
export function useAdblockDetector(): [boolean, boolean] {
    const [isAdblockDetected, setIsAdblockDetected] = useState(false);
    const [isAdblockCheckComplete, setIsAdblockCheckComplete] = useState(false);

    useEffect(() => {
        fetch("https://www3.doubleclick.net", {
            method: "HEAD",
            mode: "no-cors",
            cache: "no-store"
        })
            .then(res => {
                setIsAdblockDetected(false);
                setIsAdblockCheckComplete(true);
            })
            .catch(() => {
                setIsAdblockDetected(true);
                setIsAdblockCheckComplete(true);
            });
    }, []);

    return [isAdblockCheckComplete, isAdblockDetected];
}
