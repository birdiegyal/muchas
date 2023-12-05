// import { Separator } from "@/components/ui/seperator";
import ProfileForm from "../../components/shared/ProfileCard";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      {/* <Separator /> */}
      <ProfileForm />
    </div>
  );
}
