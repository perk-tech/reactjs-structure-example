export const withController = (component) => (controller) => () => {
    return (
        <controller>
            <component />
        </controller>
    )
}