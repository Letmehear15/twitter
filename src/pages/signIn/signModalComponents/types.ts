import { useStylesSignIn } from "../SignIn";

export type InnerProps = {
    open: boolean
    onClose: () => void
    classes: ReturnType<typeof useStylesSignIn>
}