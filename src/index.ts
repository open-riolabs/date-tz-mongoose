export * from './datetz-schema';

declare module 'mongoose' {
  namespace Schema {
    namespace Types {
      class DateTzSchema extends SchemaType { }
    }
  }
}