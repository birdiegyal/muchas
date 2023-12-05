import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProfileForm() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 bg-background">
      <Card>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Username</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                User123
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              disabled
              id="email"
              type="email"
              value="user123@example.com"
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Last Searched Place</CardTitle>
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
      <Button className="w-full">Show on Map</Button>
      <div className="text-center">
        <Link className="text-blue-500 hover:underline" href="#">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
