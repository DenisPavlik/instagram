import { getProfile } from "@/actions";
import { auth } from "@/auth";
import SettingForm from "@/components/SettingsForm";


export default async function SettingsPage() {
  const session = await auth();
  if (!session) {
    return 'You are not logged in!'
  }
  const userEmail = session.user?.email as string
  const profileDoc = await getProfile(userEmail)
  
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile setting</h1>
      <SettingForm userEmail={userEmail} profileDoc={profileDoc} />
    </div>
  );
}
