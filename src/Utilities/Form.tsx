import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Form = () => {
  return (
    <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQ_P9HI-ynXpXxKx4rrrPvvAk2GhpR5r4PTgvah0jTzCckZQ/viewform?embedded=true" width="450" height="1110" className="overflow-hidden" >Loading…</iframe>
        {/* <Input placeholder="Name" />
        <Input className="mt-4" placeholder="Email" />
        <Textarea className="mt-4" placeholder="Organization / Company Name" />
        <div className="mt-4">Which option best describes your company ?</div>
        <Select>
            <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <Textarea className="mt-4" placeholder="Tell us more about your project needs"/>
        <Button  className="bg-transparent mt-4 text-white border border-white hover:bg-white hover:text-black">Submit</Button> */}
    </div>
  )
}

export default Form