export type HomeProjectsProps = {
    setHoveredProject: (img: string | null) => void;
}

export type HomeMainProps = {
    setSelected: (option: Option) => void;
}
export type Option = "projects" | "contact" | "about";