
import Seconde from "@/components/Seconde";
import Start from "@/components/Start";
import Third from "@/components/Third";



export default function Home() {
  return (
    <div>
      <Start/>
      <div className="mt-[600px] lg:mt-[720px] mx-10">
      <Seconde/>
      <Third/>
  
      </div>
      
    </div>
  );
}
