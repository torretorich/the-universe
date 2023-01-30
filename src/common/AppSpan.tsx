import React from "react";

function AppButton({
                       className,
                       dataItem
                   }: {
    className: string
    dataItem: any
}) {
    return (
        <span className={className}>
             {dataItem}
        </span>
    )
}

export default AppButton;