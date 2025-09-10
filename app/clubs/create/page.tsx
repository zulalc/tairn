import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createClubAction } from "@/utils/actions";
import GenresInput from "@/components/form/GenresInput";
import BooleanInput from "@/components/form/BooleanInput";
import LocationInput from "@/components/form/LocationInput";
function CreateClub() {
  return (
    <section className="flex flex-col items-center min-h-screen py-10 px-4">
      <h1 className="text-2xl font-semibold mb-8">Create Club</h1>
      <div className="border p-8 rounded-xl shadow-sm max-w-3xl w-full">
        <h3 className="text-lg mb-6 font-medium text-center">
          General Information
        </h3>

        <FormContainer action={createClubAction}>
          <div className="grid gap-10">
            <div className="grid md:grid-cols-3 gap-6">
              <FormInput
                name="name"
                type="text"
                label="Club Name"
                placeholder="Club Name"
              />

              <LocationInput name="location" label="Meeting Location" />

              <div className="flex items-end">
                <BooleanInput name="isPublic" label="Public Club?" />
              </div>
            </div>

            <TextAreaInput
              name="description"
              labelText="Club Description"
              placeholder="Tell people about your club..."
              required
            />

            <div>
              <h3 className="text-md mb-4 font-medium">Genres</h3>
              <GenresInput />
            </div>

            <TextAreaInput
              name="rules"
              labelText="Club Rules"
              placeholder="List your club rules here..."
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateClub;
