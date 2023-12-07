import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProfileForm() {
  return (
    <div className="min-h-screen mx-2.5 space-y-6 bg-background">
      <Card className="max-w-2xl dark:bg-input boder-none mx-auto sm:max-w-lg md:max-w-lg">
        <CardContent className="space-y-4 border-none">
          <div className="flex items-center my-5">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl text-white font-bold">Username</h2>
              <div className="text-sm text-gray-300 dark:text-gray-400">
                User123
              </div>
            </div>
          </div>
          <div className="space-y-2 text-white">
            <Label htmlFor="email ">Email</Label>
            <Input
              disabled
              id="email"
              type="email"
              value="user123@example.com"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="dark:bg-input">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            Last Searched Place
          </CardTitle>
        </CardHeader>
        <CardContent>
          <img
            alt="Last searched place"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
        </CardContent>
      </Card>
      <Button className="w-full bg-primary text-[20px] font-bold   mt-2  hover:bg-input hover:text-white">
        Show on Map
      </Button>
      <div className="text-center">
        <Link className="text-blue-500 hover:underline" to="/editprofile">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
