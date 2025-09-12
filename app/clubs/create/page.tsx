import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createClubAction } from "@/utils/actions";
import GenresInput from "@/components/form/GenresInput";
import BooleanInput from "@/components/form/BooleanInput";
import LocationInput from "@/components/form/LocationInput";
import CounterInput from "@/components/form/CounterInput";
import CurrentBookSelector from "@/components/form/CurrentBookSelector";
import { Button } from "@/components/ui/button";
function CreateClub() {
  return (
    <section className="flex flex-col items-center min-h-screen py-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
        Create Club
      </h1>

      <div className="border p-8 rounded-xl shadow-md w-full max-w-4xl">
        <h3 className="text-xl sm:text-2xl mb-6 font-semibold text-center">
          General Information
        </h3>

        <FormContainer action={createClubAction}>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput
                name="name"
                type="text"
                label="Club Name"
                placeholder="Club Name"
              />

              <LocationInput name="location" label="Meeting Location" />

              <div className="flex items-center md:justify-end">
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
              <h3 className="text-lg font-medium mb-4">Genres</h3>
              <GenresInput />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextAreaInput
                name="rules"
                labelText="Club Rules"
                placeholder="List your club rules here..."
              />
              <CounterInput name="capacity" label="Max Members" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Current Book</h3>
              <CurrentBookSelector />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className=" text-white px-6 py-3 rounded-lg font-medium"
              >
                Create Club
              </Button>
            </div>
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateClub;
