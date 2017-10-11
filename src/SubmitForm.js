import React, { Component } from 'react';
import { Form, Text, Select, Textarea, FormError } from 'react-form';

class SubmitForm extends Component {
  render() {
    return (
      <Form
        onSubmit={values => {
          console.log(this.props.reports.length);
          this.props.reports.push(values);
          this.props.onSubmit(this.props.reports);
        }}
        // Let's give the form some default values
        defaultValues={{
          tags: [],
          media: []
        }}
        // Validating your form is super easy, just use the `validate` life-cycle method
        validate={values => {
          const { title, category, notes } = values;
          return {
            title: !title ? 'A title is required' : undefined,
            category: !category ? 'You need a Report Type' : false,
            notes: !notes ? 'Please add some brief notes' : null
          };
        }}
        // `onValidationFail` is another handy form life-cycle method
        onValidationFail={() => {
          window.alert(
            'There is something wrong with your form!  Please check for any required values and try again :)'
          );
        }}
      >
        {({ values, submitForm, addValue, removeValue, getError }) => {
          // A Form's direct child will usually be a function that returns a component
          // This way you have access to form methods and form values to use in your component. See the docs for a complete list.
          return (
            // When the form is submitted, call the `submitForm` callback prop
            <form onSubmit={submitForm}>
              <div>
                <h6>Report Title</h6>
                <Text // This is the built-in Text formInput
                  field="title" // field is a string version of the field location
                  placeholder="Report title here" // all other props are sent through to the underlying component, in this case an <input />
                />
              </div>

              <div>
                <h6>Report Type</h6>
                <Select // This is the built-in Select formInput
                  field="category"
                  options={[
                    {
                      // You can ship it some options like usual
                      label: 'Personal Info',
                      value: 'person'
                    },
                    {
                      label: 'Sticker/Propaganda',
                      value: 'propaganda'
                    },
                    {
                      label: 'Photo/Video Sighting',
                      value: 'image'
                    },
                    {
                      label: 'Other',
                      value: 'other'
                    }
                  ]}
                />
              </div>

              <div>
                <h6>Notes/Narrative</h6>
                <Textarea // This is the built-in Textarea formInput
                  field="notes"
                  placeholder="Provide some brief context"
                />
              </div>

              <div>
                <h6>Location</h6>
                <Textarea // This is the built-in Textarea formInput
                  field="location"
                  placeholder="Where did this happen?"
                />
              </div>

              <h6>Tags</h6>
              <FormError field="tags" />
              <div classname="nested">
                {!values.tags.length ? (
                  <em>No tags have been added yet</em>
                ) : (
                  values.tags.map((
                    tags,
                    i // Loop over the values however you'd like
                  ) => (
                    <div key={i}>
                      <div>
                        <Text
                          field={['tags', i, 'title']} // You can easily pass an array-style field path. Perfect for passing down as props or nested values
                          placeholder="tag title"
                        />
                      </div>

                      <button // This button will remove this tag from the `tags` field
                        type="button"
                        onClick={() => removeValue('tags', i)} // `removeValue` takes a field location for an array, and the index for the item to remove
                      >
                        Remove tag
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => addValue('tags', {})} // `addValue` takes an array-like field, and the value to add
                >
                  Add tag
                </button>
              </div>

              <h6>Media (Links to images, audio, video)</h6>
              <FormError field="media" />
              <div classname="nested">
                {!values.media.length ? (
                  <em>No media has been added yet</em>
                ) : (
                  values.media.map((media, i) => (
                    <div key={i}>
                      <div>
                        <Text
                          field={['media', i, 'title']} // You can easily pass an array-style field path. Perfect for passing down as props or nested values
                          placeholder="media title"
                        />
                      </div>

                      <button // This button will remove this tag from the `tags` field
                        type="button"
                        onClick={() => removeValue('media', i)} // `removeValue` takes a field location for an array, and the index for the item to remove
                      >
                        Remove media
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => addValue('media', {})} // `addValue` takes an array-like field, and the value to add
                >
                  Add media
                </button>
              </div>

              <br />
              <button>Submit</button>
            </form>
          );
        }}
      </Form>
    );
  }
}

export default SubmitForm;
