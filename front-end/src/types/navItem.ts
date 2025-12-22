export interface NavItemProps {
    icon: React.ComponentType<any>;
    label: string;
    badge?: string | number;
    active?: boolean;
    to: string;
}