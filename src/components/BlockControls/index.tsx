import React from "react";
import {BlocksType} from "../../types/BlocksType";
import "./index.css";

type BlockControlsProps = {
    blockId: number,
    setBlocks: React.Dispatch<React.SetStateAction<BlocksType>>,
    width?: string
}

function BlockControls({blockId, setBlocks, width}: BlockControlsProps) {

    const duplicateClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        // eslint-disable-next-line no-restricted-globals
        setBlocks((prevState => {
            const btn = event.target as HTMLButtonElement;
            const index = parseInt(btn.value, 10);
            let newState: BlocksType = [];
            prevState.forEach((block, blockIndex) => {
                if (blockIndex === index) {
                    newState.push(prevState[blockIndex]);
                }
                newState.push(prevState[blockIndex]);
            })
            return newState;
        }));
    };

    const deleteClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Удалить этот блок?')) {
            setBlocks((prevState => {
                const btn = event.target as HTMLButtonElement;
                return prevState.filter((value, index) => {
                    return index !== parseInt(btn.value, 10);
                });
            }));
        }
    };

    const upClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const btn = event.target as HTMLButtonElement;
        const index = parseInt(btn.value, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index - 1) {
                    newBlock = prevState[index];
                } else if (index !== 0 && newIndex === index) {
                    newBlock = prevState[index - 1];
                }
                return newBlock;
            })
        }));
    };

    const downClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const btn = event.target as HTMLButtonElement;
        const index = parseInt(btn.value, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index && index !== prevState.length - 1) {
                    newBlock = prevState[index + 1];
                } else if (newIndex === index + 1) {
                    newBlock = prevState[index];
                }
                return newBlock;
            })
        }));
    };

    const expandClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        let btn = event.target as HTMLButtonElement;
        let index = parseInt(btn.value, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index) {
                    newBlock.width = "600";
                }
                return newBlock;
            })
        }));
    };

    const collapseClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        let btn = event.target as HTMLButtonElement;
        let index = parseInt(btn.value, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index) {
                    newBlock.width = "532";
                }
                return newBlock;
            })
        }));
    };

    return (
        <div className="block__controls">
            <button className="block__control" type="button" name="up" value={blockId} onClick={upClickHandler} title="Переместить выше">↑</button>
            {width ? <button className="block__control" type="button" name="width" value={blockId} onClick={width === "600" ? collapseClickHandler : expandClickHandler} title="Переключить ширину">{width === "600" ? "⪥" : "↔"}</button> : null}
            <button className="block__control" type="button" name="down" value={blockId} onClick={downClickHandler} title="Переместить ниже">↓</button>
            <button className="block__control" type="button" name="duplicate" value={blockId} onClick={duplicateClickHandler} title="Дублировать блок">⤹</button>
            <button className="block__control" type="button" name="delete" value={blockId} onClick={deleteClickHandler} title="Удалить блок">×</button>
        </div>
    );
}

export default BlockControls;
