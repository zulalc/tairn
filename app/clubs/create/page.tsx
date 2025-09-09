import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createClubAction } from "@/utils/actions";
import GenresInput from "@/components/form/GenresInput";

function CreateClub() {
  return (
    <section className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-2xl font-semibold mb-8">Create Club</h1>
      <div className="border p-8 rounded-md max-w-2xl w-full">
        <h3 className="text-lg mb-4 font-medium text-center">
          General Information
        </h3>

        <FormContainer action={createClubAction}>
          <div className="grid gap-8 mb-4">
            <div className="grid md:grid-cols-2 gap-8">
              <FormInput
                name="name"
                type="text"
                label="Club Name"
                placeholder="Club Name"
              />
              <TextAreaInput
                name="description"
                labelText="Club Description"
                placeholder="Tell people about your club..."
                required
              />
            </div>

            <div>
              <h3 className="text-lg mt-10 mb-6 font-medium">Genres</h3>
              <GenresInput />
            </div>
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateClub;
