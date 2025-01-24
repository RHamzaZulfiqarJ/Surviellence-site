import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const CDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><DensityMediumIcon /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1e2028] text-white duration-0">
                <DropdownMenuItem>Technology</DropdownMenuItem>
                <DropdownMenuItem>AI Solutions</DropdownMenuItem>
                <DropdownMenuItem>Who We Serve</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default CDropdown