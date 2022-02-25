"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdblockDetector = void 0;
const react_1 = require("react");
/**
 * A react hook to detect adblockers.
 * @returns [isAdblockCheckComplete, isAdblockEnabled]
 */
function useAdblockDetector() {
    const [isAdblockDetected, setIsAdblockDetected] = (0, react_1.useState)(false);
    const [isAdblockCheckComplete, setIsAdblockCheckComplete] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
exports.useAdblockDetector = useAdblockDetector;
//# sourceMappingURL=useAdblockDetector.js.map