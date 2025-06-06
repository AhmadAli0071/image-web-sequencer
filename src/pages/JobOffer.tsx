
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const JobOffer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-blue-600 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Original / Origin Jobs Board
            </Link>
          </div>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Jobs Offer</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Et nulla et est pretium faucibus a non est. Proin dignissim mollis fermentum. Sed vitae risus ut ipsum congue luctus. Nulla mattis ornare fermentum. Integer id felis sit amet metus venenatis porta. Etiam ex quis commodo vestibulum. Ut et arcu eu metus sagittis auctor sit amet et quam. Quisque tellus elit, volutpat quis eros eu, pulvinar accumsan nunc. Vivamus hendrerit dui non nunc ultrices, nec sodales rutrum. Maecenas euismod diam et dapibus mollis. Phasellus ultrices, sapien mollis consequat efficitur, diam turpis cursus lorem, at fringilla sem lectus ut ex. Aliquam suscipit, est quis pellentesque consectetur, sem arcu lacinia magna, ac maximus elit diam non diam.
            </p>
            
            <p>
              Nullam eu elementum lacus, non tempor est. Nunc egestas ligula convallis elit commodo eleifend. Maecenas condimentum ipsum eget metus posuere, sit amet gravida elit laoreet. In hac habitasse platea dictumst. Vestibulum ornare risus ultrices, lacinia dui quis, porta tellus. Aliquam non sapien enim. Fusce a porttitor tellus, at elementum justo. Maecenas massa erat, ornare in pulvinar a, bibendum non nunc lacus massa, viverra id quam sed, fermentum elementum orci.
            </p>
            
            <p>
              Ut cursus ante orci, id ornare libero pharetra quis. In vel ex tempor nunc aliquet elementum. Ut non dictum velit, quis tristique tellus. Cras convallis malesuada sem, id viverra nulla vestibulum at. Maecenas euismod atque rutrum, nec pharetra massa convallis mattis. Ut quam quam, efficitur at aliquet eget, pretium placerat mi. Phasellus fermentum nulla quis arcu scelerisque, a pharetra urna mattis. Donec accumsan ex. Aenean quis congue magna. Nullam tortor erat, pharetra id neque eget, placerat lobortis nulla.
            </p>
            
            <p>
              Mauris posuere, dui eu congue aliquet, lectus nibh egestas ante, non lobortis lorem purus non dui. Morbi bibendum accumsan urna, ac semper mi accumsan vitae. Etiam laoreet dui id ligula consequat, suscipit turpis tellus, ornare sed libero nisl. Proin fringilla nisl neque, non sodales est lacinia faucibus vel tortor mattis, lacus tellus dignissim vestibulum nunc molestie velit. Sed lacinia libero. Mauris tincidunt nisl non justo rutrum, ac sodales erat venenatis. Etiam vel tempor orci. Integer molestie sit amet turpis ac molestie. Morbi vel faucibus ligula. Praesent lobortis aliquam consequat odio, nec consectetur lectus dictum eu. Aliquam imperdiet justo ut odio mollis, bibendum posuere nulla hendrerit.
            </p>
          </div>
          
          <div className="mt-12">
            <Link to="/application">
              <Button size="lg" className="px-8 py-3">
                Apply
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JobOffer;
